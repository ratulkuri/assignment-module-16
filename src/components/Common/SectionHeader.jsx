const SectionHeader = ({title = "", description = ""}) => {
  return (
    <>
        {
            (title || description) &&
            <div className='w-full flex flex-col gap-4 font-poppin overflow-hidden'>
                { title && <h3 className='text-xl font-medium text-theme-green'>{title}</h3> }
                { description && <span className='max-w-[500px] text-2xl lg:text-3xl font-bold text-black'>{description}</span> }
            </div>
        }
    </>
  )
}

export default SectionHeader