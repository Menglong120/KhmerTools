'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import { Binary, Upload, Image as ImageIcon, ArrowLeftRight } from 'lucide-react';

export function Base64Tool() {
  const { locale, t } = useApp();
  const [mode, setMode] = useState<'text' | 'file'>('text');
  const [direction, setDirection] = useState<'encode' | 'decode'>('encode');

  // Text state
  const [inputText, setInputText] = useState<string>('សួស្តីកម្ពុជា! Hello KhmerTools 🇰🇭');
  const [outputText, setOutputText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // File state
  const [fileBase64, setFileBase64] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<string>('');
  const [isImage, setIsImage] = useState<boolean>(false);

  // UTF-8 safe encode/decode
  const handleTextTransform = () => {
    try {
      if (direction === 'encode') {
        const bytes = new TextEncoder().encode(inputText);
        const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');
        const encoded = btoa(binString);
        setOutputText(encoded);
        setError(null);
      } else {
        const binString = atob(inputText.trim());
        const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));
        const decoded = new TextDecoder().decode(bytes);
        setOutputText(decoded);
        setError(null);
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Conversion failed. Make sure input is valid Base64.');
      setOutputText('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setFileSize((file.size / 1024).toFixed(1) + ' KB');
    setIsImage(file.type.startsWith('image/'));

    const reader = new FileReader();
    reader.onload = () => {
      setFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      {/* Mode Switch */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => setMode('text')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              mode === 'text'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {locale === 'km' ? 'អត្ថបទ (Text UTF-8)' : 'Text (UTF-8)'}
          </button>
          <button
            type="button"
            onClick={() => setMode('file')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              mode === 'file'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {locale === 'km' ? 'រូបភាព / ឯកសារ (File/Image)' : 'File / Image to Base64'}
          </button>
        </div>
      </div>

      {mode === 'text' ? (
        <div className="space-y-4">
          {/* Action selection */}
          <div className="flex items-center justify-between">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setDirection('encode')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  direction === 'encode'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Encode → Base64
              </button>
              <button
                type="button"
                onClick={() => setDirection('decode')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  direction === 'decode'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Decode ← Base64
              </button>
            </div>

            <button
              type="button"
              onClick={handleTextTransform}
              className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs cursor-pointer"
            >
              {direction === 'encode' ? 'Encode Now' : 'Decode Now'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                {direction === 'encode' ? (locale === 'km' ? 'អត្ថបទដើម' : 'Plain Text') : 'Base64 Input'}
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={7}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-y"
              />
            </div>

            {/* Output */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {direction === 'encode' ? 'Base64 Output' : (locale === 'km' ? 'អត្ថបទដែលបានស្រាយ' : 'Decoded Text')}
                  </span>
                  <CopyButton textToCopy={outputText} label={t.copy} copiedLabel={t.copied} />
                </div>
                <textarea
                  readOnly
                  value={outputText}
                  rows={7}
                  placeholder="Output will appear here..."
                  className="w-full p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-mono resize-y select-all"
                />
              </div>

              {error && (
                <p className="text-xs text-rose-500 mt-2 font-medium">
                  ⚠ {error}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* File to Base64 */
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 text-center relative hover:border-indigo-500 transition-colors">
            <input
              type="file"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <Upload className="w-10 h-10 text-indigo-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {locale === 'km' ? 'ចុច ឬទម្លាក់រូបភាព/ឯកសារនៅទីនេះ' : 'Click or drag and drop a file / image'}
            </p>
            <p className="text-xs text-slate-400 mt-1">PNG, JPG, SVG, WebP, PDF (Processed entirely in browser)</p>
          </div>

          {fileBase64 && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{fileName}</span>
                  <span className="text-xs text-slate-400 ml-2">({fileSize})</span>
                </div>
                <CopyButton textToCopy={fileBase64} label={locale === 'km' ? 'ចម្លង Data URI' : 'Copy Data URI'} copiedLabel={t.copied} />
              </div>

              {isImage && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={fileBase64} alt={fileName} className="max-h-60 rounded-lg object-contain shadow-xs" />
                </div>
              )}

              <textarea
                readOnly
                value={fileBase64}
                rows={4}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-mono select-all"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
