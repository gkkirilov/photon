// maybe fix circular dependency, hopefully.

import { browser } from '$app/environment'
import { env } from '$env/dynamic/public'
import { writable } from 'svelte/store'

export const LINKED_INSTANCE_URL =
  (env.PUBLIC_LOCK_TO_INSTANCE ?? 'true').toLowerCase() == 'true'
    ? env.PUBLIC_INSTANCE_URL
    : undefined

const getDefaultInstance = (): string => {
  console.log(env.PUBLIC_INSTANCE_URL)

  // if (browser) {
  //   return env.PUBLIC_INSTANCE_URL || 'api.spodeli.nauchi.bg'
  // } else {
  //   return env.PUBLIC_INTERNAL_INSTANCE || env.PUBLIC_INSTANCE_URL || 'api.spodeli.nauchi.bg'
  // }
    return 'api.spodeli.nauchi.bg'
}

export const DEFAULT_INSTANCE_URL = getDefaultInstance()
export let instance = writable(DEFAULT_INSTANCE_URL)
