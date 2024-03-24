import { promises as fs } from 'fs';
import DiscussCard from './discussCard';



export default async function DiscussionForum() {
   // get the data from local folder
    const file = await fs.readFile(process.cwd() + '/src/components/discussionDummyData.json', 'utf8');
    const discussData = JSON.parse(file);
   

    console.log("from 12 line", discussData)


        return (
            <div>
                {/* header */}
            <p className='text-3xl font-bold text-red-500 mt-4 mb-10 bg-slate-100 w-72 px-3 py-1 hidden md:block' >Discussion Forum</p>
                {discussData.map((item,id)=><DiscussCard key={id} item={item}></DiscussCard>)}
            </div>
        );
    
};


