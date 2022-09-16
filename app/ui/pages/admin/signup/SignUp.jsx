import React from 'react'

export const SignUp = () => {
    return(
   <> 
   
    <nav className="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
      <div className="container flex items-center justify-between py-0 flex-wrap-inherit">
        <a className="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-white lg:ml-0" hresName="../pages/dashboard.html"> Soft UI Dashboard </a>
        <button navbar-trigger className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden" typsName="button" aria-controlsName="navigation" aria-expandesName="false" aria-labesName="Toggle navigation">
          <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
            <span bar1 className="w-5.5 rounded-xs duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
            <span bar2 className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
            <span bar3 className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
          </span>
        </button>
        <div navbar-menu className="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto">
          <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
            <li>
              <a className="flex items-center px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" aria-currensName="page" hresName="../pages/dashboard.html">
                <i className="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" hresName="../pages/profile.html">
                <i className="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60"></i>
                Profile
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" hresName="../pages/sign-up.html">
                <i className="mr-1 text-white lg-max:text-slate-700 fas fa-user-circle opacity-60"></i>
                Sign Up
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" hresName="../pages/sign-in.html">
                <i className="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60"></i>
                Sign In
              </a>
            </li>
          </ul>
          {/* <!-- online builder btn  --> */}
           <li className="flex items-center">
            <a
              className="leading-pro ease-soft-in border-white/75 text-xs tracking-tight-soft rounded-3.5xl hover:border-white/75 hover:scale-102 active:hover:border-white/75 active:hover:scale-102 active:opacity-85 active:shadow-soft-xs active:border-white/75 bg-white/10 hover:bg-white/10 active:hover:bg-white/10 mr-2 mb-0 inline-block cursor-pointer border border-solid py-2 px-8 text-center align-middle font-bold uppercase text-white shadow-none transition-all hover:text-white hover:opacity-75 hover:shadow-none active:scale-100 active:bg-white active:text-black active:hover:text-white active:hover:opacity-75 active:hover:shadow-none"
              targesName="_blank"
              hresName="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053"
              >Online Builder</a
            >
          </li> 
          <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
            <li>
              <a hresName="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" targesName="_blank" className="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-400 to-gray-100 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-slate-800 transition-all">Free download</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <section className="min-h-screen mb-32">
        <div className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl" stylsName="background-image: url('../assets/img/curved-images/curved14.jpg')">
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
          <div className="container z-10">
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                <h1 className="mt-12 mb-2 text-white">Welcome!</h1>
                <p className="text-white">Use these awesome forms to login or create new account in your project for free.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
            <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
              <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                  <h5>Register with</h5>
                </div>
                <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                  <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" hresName="javascript:;">
                    {/* svg */}
                    </a>
                  </div>
                  <div className="w-3/12 max-w-full px-1 flex-0">
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" hresName="javascript:;">
                      
                    </a>
                  </div>
                  <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" hresName="javascript:;">
                     
                    </a>
                  </div>
                  <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                    <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
                  </div>
                </div>
                <div className="flex-auto p-6">
                  <form rolsName="form text-left">
                    <div className="mb-4">
                      <input typsName="text" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholdesName="Name" aria-labesName="Name" aria-describedbsName="email-addon" />
                    </div>
                    <div className="mb-4">
                      <input typsName="email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholdesName="Email" aria-labesName="Email" aria-describedbsName="email-addon" />
                    </div>
                    <div className="mb-4">
                      <input typsName="password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" placeholdesName="Password" aria-labesName="Password" aria-describedbsName="password-addon" />
                    </div>
                    <div className="min-h-6 pl-6.92 mb-0.5 block">
                      <input isName="terms" className="w-4.92 h-4.92 ease-soft -ml-6.92 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" typsName="checkbox" valusName="" checked />
                      <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700" fosName="terms"> I agree the <a hresName="javascript:;" className="font-bold text-slate-700">Terms and Conditions</a> </label>
                    </div>
                    <div className="text-center">
                      <button typsName="button" className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">Sign up</button>
                    </div>
                    <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <a hresName="../pages/sign-in.html" className="font-bold text-slate-700">Sign in</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
     </>
    )
}