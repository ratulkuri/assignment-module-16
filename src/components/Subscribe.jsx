

function Subscribe() {
  return (
    <>
      <section>
        <div className="pt-10 lg:pt-[90px] pb-14 lg:pb-[137px] bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-[495px] mx-auto">
                <span className="mb-6 inline-block text-base lg:text-xl font-medium leading-none uppercase text-theme-green">
                  Subscribe
                </span>
                <h2 className="font-poppin capitalize mb-2 text-2xl lg:text-3xl font-bold font-heading">
                  Subscribe to get the latest news about us
                </h2>
                <p className="mb-8 text-gray-400 leading-loose text-base">
                  Please drop your email below to get daily update about what we do
                </p>
              </div>
              <form className="mx-auto" action="">
                <div className="mx-auto flex items-center border border-[#8B8B8B] rounded-xl bg-white py-0.5 px-1 overflow-hidden w-full">
                  <input
                    className="block w-3 flex-1 py-2 px-4 mr-4 text-base rounded leading-loose focus:outline-none"
                    type="email"
                    placeholder="Enter Your Email Adress"
                  />
                  <div className="flex-shrink-0">
                    <button className="w-auto btn btn-secondary btn-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
