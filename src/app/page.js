import DiscussionForum from '@/components/discussionForum';
import DrawerContent from '@/components/drawerContent';
import MarketStories from '@/components/marketStories';
import { IoMdArrowDropright } from "react-icons/io";

const SinglePage = () => {


  return (
    <div className='flex relative'>

      {/* drawer button */}


     
        <button className={`z-30 h-24 w-4 bg-blue-950 peer/btn focus:ml-[200px] focus:transition duration-300 delay-150  fixed mt-56`}>
          <IoMdArrowDropright className='text-white text-2xl ' />
        </button>


        {/* it's for drawer */}

        <div className='z-20 fixed    top-0 -left-96 h-screen w-[200px] bg-blue-900 shadow-xl  peer-focus/btn:left-0 peer-focus/btn:transition  duration-300 delay-150 ease-out'>
          <DrawerContent className='focus:left-0 peer/drawer'></DrawerContent>
        </div>
     

      <div className='z-5 lg:peer-focus/btn:ml-[200px] lg:peer-focus/drawer:ml-[200px] flex-grow'>

        {/* this is for large and medium devices */}

        <div className='hidden lg:block'>
          <div className='grid grid-cols-2 gap-4 px-10'>
            <DiscussionForum></DiscussionForum>
            <MarketStories></MarketStories>
          </div>
        </div>

        {/* this tab section is for small devices */}

        <div className=' block lg:hidden w-full '>
          <fieldset>

            <input type='radio' id='tab1' className='peer/tab1 absolute opacity-0 left-20' name='tabs' />
            <label htmlFor='tab1'>
              <p className={`bg-blue-900 text-center peer-checked/tab1:text-blue-200 text-white text-lg w-1/2 h-10 pt-2 inline-block`}>Discussion Forum</p>
            </label>
            <input type='radio' id='tab2' className='peer/tab2 absolute opacity-0 left-20' name='tabs' />
            <label htmlFor='tab2'>
              <p className={`inline-block text-center pt-2 bg-blue-900 peer-checked/tab2:text-blue-200 text-white text-lg w-1/2 h-10`}>Market Stories</p>
            </label>

            <div className=' peer-checked/tab1:block peer-checked/tab2:hidden'>
              <DiscussionForum></DiscussionForum>
            </div>
            <div className='peer-checked/tab1:hidden peer-checked/tab2:block'>
              <MarketStories></MarketStories>
            </div>
          </fieldset>
        </div>
      </div>

    </div>
  );
};

export default SinglePage;