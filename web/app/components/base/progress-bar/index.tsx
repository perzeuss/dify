type ProgressBarProps = {
  percent: number
}
const ProgressBar = ({
  percent = 0,
}: ProgressBarProps) => {
  return (
    <div className='flex items-center'>
      <div className='mr-2 w-[100px] bg-gray-100 dark:bg-neutral-950 rounded-lg'>
        <div
          className='h-1 bg-[#2970FF] rounded-lg'
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className='text-xs font-medium text-neutral-400'>{percent}%</div>
    </div>
  )
}

export default ProgressBar
