import MarketCard from "./marketCard";
import { promises as fs } from 'fs';

export default async function MarketStories() {
    // get the data from local folder
     const file = await fs.readFile(process.cwd() + '/src/components/marketStories.json', 'utf8');
     const marketData = JSON.parse(file);
    return (
        <div>
            <p  className='text-3xl font-bold text-red-500 mt-4 mb-10 bg-slate-100 w-72 lg:px-3 py-1 hidden md:block' >Market Stories</p>
            {
                marketData.map((item, id)=><MarketCard key={id} item={item}></MarketCard>)
            }

        </div>
    );
};

