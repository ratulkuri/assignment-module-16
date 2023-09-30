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
              <div className="mb-8 w-1/2 md:w-1/2 lg:w-1/4 text-center">
                <span className="mb-6 inline-block p-4 rounded-lg bg-green-100">
                  <UserGroupIcon className="w-[30px] h-[30px] text-black" />
                </span>
                <h3 className="text-2xl font-bold">{StatList?.followers}</h3>
                <p className="text-gray-500">Followers</p>
              </div>
            }
            {
              StatList?.solved &&
              <div className="mb-8 w-1/2 md:w-1/2 lg:w-1/4 text-center">
                <span className="mb-6 inline-block p-4 rounded-lg bg-green-100">
                  <HandThumbUpIcon className="w-[30px] h-[30px] text-black" />
                </span>
                <h3 className="text-2xl font-bold">{StatList?.solved}</h3>
                <p className="text-gray-500">Solved Problems</p>
              </div>
            }
            {
              StatList?.customers &&
              <div className="mb-8 w-1/2 md:w-1/2 lg:w-1/4 text-center">
                <span className="mb-6 inline-block p-4 rounded-lg bg-green-100">
                  <FaceSmileIcon className="w-[30px] h-[30px] text-black" />
                </span>
                <h3 className="text-2xl font-bold">{StatList?.customers}</h3>
                <p className="text-gray-500">Happy Customers</p>
              </div>
            }
            {
              StatList?.projects &&
              <div className="mb-8 w-1/2 md:w-1/2 lg:w-1/4 text-center">
                <span className="mb-6 inline-block p-4 rounded-lg bg-green-100">
                  <Squares2X2Icon className="w-[30px] h-[30px] text-black" />
                </span>
                <h3 className="text-2xl font-bold">{StatList?.projects}</h3>
                <p className="text-gray-500">Projects</p>
              </div>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default StatList;
