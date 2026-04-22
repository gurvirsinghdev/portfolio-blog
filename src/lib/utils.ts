import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPostCoverImageLink(id: string) {
  return `https://picsum.photos/seed/${id}/1920/1080`
}

export function createBreifFromDescription(description: string) {
  return (description.trim().split('\n').at(0) || 'No Breif Available').trim()
}
