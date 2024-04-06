'use client'

import { File, UploadIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { Progress } from '@/components/ui/progress'
import { TabsContent } from '@/components/ui/tabs'

interface FileProps {
  name: string
  preview: string
}

export function ImageTab() {
  const [files, setFiles] = useState([] as FileProps[])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/*': ['.jpeg', '.png'],
      'text/*': ['.pdf'],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div className="relative flex h-24 w-20 flex-col items-center justify-around rounded-md bg-zinc-200 p-0.5 dark:bg-zinc-800">
        <File className="h-12 w-12 text-muted-foreground" />
        <span className="absolute left-1/2 z-10 -translate-x-1/2 text-xs font-bold">
          {file.name.slice(0, 15).concat('...')}
        </span>
        <Progress className="self-end" value={50} />
      </div>
    </div>
  ))
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <TabsContent className="h-[14rem] max-w-[29rem]" value="image">
      <div>
        <label
          htmlFor="files"
          className="flex h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed bg-zinc-50 p-4 text-sm text-zinc-600 hover:bg-zinc-100 data-[drag-active=true]:border-primary data-[drag-active=true]:bg-primary dark:bg-zinc-900 dark:text-zinc-400"
          data-drag-active={isDragActive}
          {...getRootProps()}
        >
          <UploadIcon className="h-4 w-4" />
          <div className="flex flex-col gap-1 text-center">
            <span className="font-medium">
              Arraste e solte, ou clique para seleciona-ló. <br />
              Você só pode selecionar 1 item apenas.
            </span>
            <span className="text-xs text-zinc-400">
              Aceita: PNG, JPEG, JPG
            </span>
          </div>
        </label>

        <input type="file" id="files" multiple {...getInputProps()} />

        <div className="mt-3 flex items-center gap-2">{thumbs}</div>
      </div>
    </TabsContent>
  )
}
