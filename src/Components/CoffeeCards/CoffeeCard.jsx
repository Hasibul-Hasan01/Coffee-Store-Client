import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, price, supplier, photo } = coffee;

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Delet product', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='bg-[#151a21]'>
            <div className='grid grid-cols-7 my-3 mx-5'>
                <div className='col-span-2 col-start-1'>
                    <span className='mx-auto my-auto'>
                        <img className='w-[180px] h-[200px]' src={photo} alt="Coffee-Image" />
                    </span>
                </div>
                <div className='col-span-4 col-start-3 my-auto items-center'>
                    <h1>Name : {name}</h1>
                    <h1>Supplier : {supplier}</h1>
                    <h1>Price : {price}</h1>
                </div>
                <div className='col-span-1 col-start-7 my-auto block'>
                    <button className="btn mb-2"><FaEye /></button><br />
                    <button className="btn mb-2"><FaPencil /></button><br />
                    <button className="btn" onClick={() => handleDelete(_id)}><RiDeleteBin5Fill /></button><br />
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;