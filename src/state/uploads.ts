import { atom } from 'jotai'
import { selectAtom } from 'jotai/utils'

interface Upload {
  file: File
  previewURL: string
  duration?: number
  isRemoving: boolean
}

interface AsyncActionWithProgress {
  isRunning: boolean
  progress: number
  error: boolean
}
