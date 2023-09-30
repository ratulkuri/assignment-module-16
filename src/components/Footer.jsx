import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <>
      <section>
        <div className="pt-20 pb-7 bg-black radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
                <a
                  className="inline-block mb-3 text-3xl font-bold leading-none bg-white p-1"
                  href="#"
                >
                  <Image
                    className="w-auto h-[30px] "
                    src={"/assets/images/logo.png"}
                    alt="logo"
                    width={309}
                    height={45}
                  />
                </a>
                <p className="mb-4 max-w-sm text-gray-400 leading-loose">
                  Some footer text about the  Agency. Just a little description to help people understand you better.
                </p>
                <div>
                  <a
                    className="inline-flex justify-center items-center w-10 h-10 mr-2 p-2 bg-theme-green text-white rounded-full"
                    href="#"
                  >
                    <svg width="15" height="15" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.49154 18.1857V10.0995H9.21948L9.62498 6.93352H6.49154V4.91691C6.49154 4.00332 6.74608 3.37781 8.05727 3.37781H9.7187V0.555153C8.91032 0.46852 8.09777 0.42669 7.28476 0.429854C4.87351 0.429854 3.218 1.90186 3.218 4.60416V6.9276H0.507812V10.0936H3.22392V18.1857H6.49154Z" fill="#F9F9F9"/>
                    </svg>
                  </a>
                  <a
                    className="inline-flex justify-center items-center w-10 h-10 mr-2 p-2 bg-theme-green text-white rounded-full"
                    href="#"
                  >
                    <svg width="15" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.4101 2.53964C16.7768 2.82029 16.0964 3.00991 15.3812 3.09562C16.1192 2.65402 16.6713 1.95899 16.9346 1.14022C16.2412 1.55208 15.4823 1.84198 14.6909 1.99732C14.1588 1.42911 13.4539 1.05248 12.6857 0.925927C11.9176 0.799371 11.1291 0.92996 10.4428 1.29742C9.75645 1.66488 9.21063 2.24866 8.89007 2.95811C8.56952 3.66756 8.49215 4.463 8.66999 5.22092C7.26502 5.15038 5.89059 4.78521 4.63588 4.1491C3.38118 3.51299 2.27424 2.62017 1.38692 1.52857C1.08353 2.05193 0.909073 2.65873 0.909073 3.30497C0.908734 3.88673 1.052 4.45958 1.32615 4.97269C1.60031 5.48581 1.99688 5.92332 2.48067 6.24641C1.9196 6.22856 1.3709 6.07695 0.88025 5.80421V5.84972C0.880194 6.66566 1.16244 7.4565 1.67908 8.08803C2.19573 8.71957 2.91497 9.15291 3.71475 9.31452C3.19425 9.45539 2.64856 9.47613 2.11887 9.3752C2.34452 10.0773 2.78407 10.6912 3.37598 11.1311C3.96789 11.5709 4.68252 11.8147 5.41984 11.8282C4.1682 12.8107 2.62243 13.3437 1.03119 13.3414C0.749319 13.3414 0.467687 13.325 0.187744 13.2921C1.80294 14.3306 3.68315 14.8817 5.6034 14.8796C12.1037 14.8796 15.6573 9.4958 15.6573 4.82651C15.6573 4.67481 15.6535 4.52159 15.6466 4.36989C16.3378 3.87003 16.9345 3.25103 17.4086 2.54192L17.4101 2.53964Z" fill="#F9F9F9"/>
                    </svg>
                  </a>
                  <a
                    className="inline-flex justify-center items-center w-10 h-10 mr-2 p-2 bg-theme-green text-white rounded-full"
                    href="#"
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.4391 15.5325H12.3039V10.6273C12.3039 9.45693 12.2842 7.95277 10.6751 7.95277C9.0441 7.95277 8.79492 9.22738 8.79492 10.5428V15.5325H5.66276V5.44432H8.66806V6.82389H8.71186C9.12943 6.03103 10.1526 5.19438 11.6779 5.19438C14.8523 5.19438 15.4383 7.28299 15.4383 9.99985L15.4391 15.5325ZM2.12812 4.06701C1.88919 4.06721 1.65256 4.0203 1.43177 3.92895C1.21099 3.83761 1.01038 3.70362 0.841424 3.53467C0.672471 3.36572 0.538489 3.16511 0.447144 2.94432C0.355799 2.72354 0.308884 2.48691 0.309083 2.24797C0.309083 1.88841 0.415685 1.53693 0.615415 1.23794C0.815144 0.938962 1.09903 0.705907 1.43119 0.568241C1.76335 0.430575 2.12887 0.394479 2.48154 0.464516C2.83421 0.534552 3.1582 0.707577 3.41256 0.961718C3.66691 1.21586 3.8402 1.53971 3.91053 1.89232C3.98086 2.24493 3.94507 2.61048 3.80768 2.94275C3.67029 3.27503 3.43747 3.55911 3.13865 3.75909C2.83983 3.95907 2.48844 4.06596 2.12888 4.06626L2.12812 4.06701ZM3.69647 15.5325H0.558266V5.44432H3.69647V15.5325Z" fill="#F9F9F9"/>
                    </svg>
                  </a>
                  <a
                    className="inline-flex justify-center items-center w-10 h-10 p-2 bg-theme-green text-white rounded-full"
                    href="#"
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.87386 4.99894C6.49668 4.99894 5.3728 6.12282 5.3728 7.5C5.3728 8.87718 6.49668 10.0011 7.87386 10.0011C9.25105 10.0011 10.3749 8.87718 10.3749 7.5C10.3749 6.12282 9.25105 4.99894 7.87386 4.99894ZM15.3752 7.5C15.3752 6.4643 15.3846 5.43798 15.3264 4.40416C15.2682 3.20335 14.9943 2.13763 14.1162 1.25953C13.2362 0.379564 12.1724 0.107505 10.9716 0.049341C9.93589 -0.00882328 8.90956 0.000558085 7.87574 0.000558085C6.84004 0.000558085 5.81372 -0.00882328 4.7799 0.049341C3.57908 0.107505 2.51336 0.38144 1.63527 1.25953C0.755297 2.1395 0.483238 3.20335 0.425073 4.40416C0.366909 5.43986 0.376291 6.46618 0.376291 7.5C0.376291 8.53382 0.366909 9.56202 0.425073 10.5958C0.483238 11.7967 0.757173 12.8624 1.63527 13.7405C2.51524 14.6204 3.57908 14.8925 4.7799 14.9507C5.8156 15.0088 6.84192 14.9994 7.87574 14.9994C8.91144 14.9994 9.93776 15.0088 10.9716 14.9507C12.1724 14.8925 13.2381 14.6186 14.1162 13.7405C14.9962 12.8605 15.2682 11.7967 15.3264 10.5958C15.3864 9.56202 15.3752 8.5357 15.3752 7.5ZM7.87386 11.3482C5.7443 11.3482 4.02564 9.62956 4.02564 7.5C4.02564 5.37044 5.7443 3.65177 7.87386 3.65177C10.0034 3.65177 11.7221 5.37044 11.7221 7.5C11.7221 9.62956 10.0034 11.3482 7.87386 11.3482ZM11.8797 4.3929C11.3825 4.3929 10.981 3.99138 10.981 3.49417C10.981 2.99696 11.3825 2.59544 11.8797 2.59544C12.3769 2.59544 12.7784 2.99696 12.7784 3.49417C12.7786 3.61223 12.7554 3.72917 12.7103 3.83827C12.6652 3.94738 12.599 4.04651 12.5155 4.13C12.432 4.21348 12.3329 4.27968 12.2238 4.32479C12.1147 4.3699 11.9978 4.39305 11.8797 4.3929Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
              {/* <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
              </div> */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-16 md:mb-0">
                <div className="max-w-[140px] lg:mx-auto">
                  <h3 className="mb-6 text-white text-2xl font-bold">Quick Links</h3>
                  <ul>
                    <li className="mb-4">
                      <Link className="text-white hover:text-gray-400" href="/services">
                        Services
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link className="text-white hover:text-gray-400" href="/projects">
                        Portfolio
                      </Link>
                    </li>
                    <li className="mb-4">
                      <a className="text-white hover:text-gray-400" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-400" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-16 md:mb-0">
                <div className="max-w-[230px] lg:mx-auto">
                  <h3 className="mb-6 text-white text-2xl font-bold">Address</h3>
                  <address className="text-white not-italic">
                    Design Agency Head Office.<br/>Airport Road<br/>United Arab Emirate
                  </address>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 pt-2 mt-10">
              Design Agency © 2023. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
