import React, { useState } from 'react';
import { Paperclip } from 'lucide-react';

interface FileAttachmentFieldProps {
  id: string;
}

const maxFiles = 5;
const maxFileSize = 10 * 1024 * 1024;

export const FileAttachmentField: React.FC<FileAttachmentFieldProps> = ({ id }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: File[] = [];
    for (const file of event.currentTarget.files ?? []) {
      selectedFiles.push(file);
    }
    const oversizedFile = selectedFiles.find((file) => file.size > maxFileSize);
    if (selectedFiles.length > maxFiles || oversizedFile) {
      setFiles([]);
      setError(oversizedFile
        ? `${oversizedFile.name} is larger than the 10 MB per-file limit.`
        : `Select no more than ${maxFiles} files.`);
      event.currentTarget.value = '';
      return;
    }

    setFiles(selectedFiles);
    setError('');
  };

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-neutral-700">
        Attach Documents or Photos <span className="font-normal text-neutral-500">(optional)</span>
      </label>
      <div className="rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-3">
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor={id}
            className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-700 transition hover:border-orange-600 hover:text-orange-700"
          >
            <Paperclip className="h-4 w-4" />
            Choose files
          </label>
          <span className="text-xs text-neutral-500">PDF, Word, Excel, or images · up to 5 files · 10 MB each</span>
        </div>
        <input
          id={id}
          name="attachments"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp"
          onChange={handleChange}
          className="sr-only"
          aria-describedby={`${id}-files ${id}-error`}
        />
        <ul id={`${id}-files`} aria-live="polite" className="mt-2 space-y-1 text-xs text-neutral-700">
          {files.map((file) => (
            <li key={`${file.name}-${file.lastModified}`} className="flex items-center justify-between gap-3">
              <span className="truncate">{file.name}</span>
              <span className="shrink-0 text-neutral-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
            </li>
          ))}
        </ul>
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs font-medium text-red-700">
          {error}
        </p>
      </div>
    </div>
  );
};
