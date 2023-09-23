import { key } from "localforage";
import PhonesCard from "./PhonesCard";


const Phones = ({phones}) =>{
    console.log(phones);
    return(
        <div className="py-10">
            <h1 className="text-2xl text-center">All Category Phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
                {
                    phones?.map(phones=> <PhonesCard key={phones.id} phones={phones}></PhonesCard>)
                }
            </div>
        </div>
    );
};
export default Phones;