import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const WorkListCard = ({work}) => {
  return (
    <>
        <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="px-4 lg:px-[30px] py-4 lg:py-[50px] rounded-lg">
                <div className="w-[94px] h-[94px] p-[30px] inline-flex items-center justify-center rounded-[20px] bg-theme-green-light text-black mb-4">
                    <span className='text-3xl'>{work?.step}</span>
                </div>
                <h2 className="text-2xl font-bold title-font mb-4">{work?.title}</h2>
                {
                    work?.des && <p className="leading-relaxed text-lg">{work?.des}</p>
                }
                <a href="#" className="group mt-11 ml-5 text-lg inline-flex items-center">
                    <span className='flex-shrink-0'>Learn More</span>
                    <ArrowLongRightIcon className='group-hover:translate-x-1.5 ease-in-out duration-300 ml-2 w-6' />
                </a>

            </div>
        </div>
    </>
  )
}

export default WorkListCard