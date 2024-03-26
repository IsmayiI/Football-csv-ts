export const dateToString = (str: string): Date => {
   const nums = str.split('/').map((str: string): number => +str)
   return new Date(nums[2], nums[1] + 1, nums[0])
}