import { getStatList } from "@/utilities/api";
import { FaceSmileIcon, HandThumbUpIcon, Squares2X2Icon, UserGroupIcon } from '@heroicons/react/24/outline';

const StatList = async () => {

  const StatList = await getStatList();

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {
              StatList?.followers &&
              <div className="mb-8 lg:mb-0 w-1/2 md:w-1/2 lg:w-1/4 text-center p-4">
                <div className="font-poppin rounded-3xl py-12 theme-shadow">
                  <span className="mb-6 inline-block p-8 rounded-lg bg-green-100">
                    <UserGroupIcon className="w-[30px] h-[30px] text-black" />
                  </span>
                  <h3 className="text-3xl font-bold mb-2">{StatList?.followers}</h3>
                  <p className="text-black font-medium">Followers</p>
                </div>
              </div>
            }
            {
              StatList?.solved &&
              <div className="mb-8 lg:mb-0 w-1/2 md:w-1/2 lg:w-1/4 text-center p-4">
                <div className="font-poppin rounded-3xl py-12 theme-shadow">
                  <span className="mb-6 inline-block p-8 rounded-lg bg-green-100">
                    <HandThumbUpIcon className="w-[30px] h-[30px] text-black" />
                  </span>
                  <h3 className="text-3xl font-bold mb-2">{StatList?.solved}</h3>
                  <p className="text-black font-medium">Solved Problems</p>
                </div>
              </div>
            }
            {
              StatList?.customers &&
              <div className="mb-8 lg:mb-0 w-1/2 md:w-1/2 lg:w-1/4 text-center p-4">
                <div className="font-poppin rounded-3xl py-12 theme-shadow">
                  <span className="mb-6 inline-block p-8 rounded-lg bg-green-100">
                    <FaceSmileIcon className="w-[30px] h-[30px] text-black" />
                  </span>
                  <h3 className="text-3xl font-bold mb-2">{StatList?.customers}</h3>
                  <p className="text-black font-medium">Happy Customers</p>
                </div>
              </div>
            }
            {
              StatList?.projects &&
              <div className="mb-8 lg:mb-0 w-1/2 md:w-1/2 lg:w-1/4 text-center p-4">
                <div className="font-poppin rounded-3xl py-12 theme-shadow">
                  <span className="mb-6 inline-block p-8 rounded-lg bg-green-100">
                    <Squares2X2Icon className="w-[30px] h-[30px] text-black" />
                  </span>
                  <h3 className="text-3xl font-bold mb-2">{StatList?.projects}</h3>
                  <p className="text-black font-medium">Projects</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default StatList;
