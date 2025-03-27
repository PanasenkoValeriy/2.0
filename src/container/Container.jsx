import { CardList } from "components/CardList/CardList";
import { InputForm } from "components/InputForm/InputForm";
import { Loader } from "components/Loader/Loader";
import { TotalAmount } from "components/TotalAmount/TotalAmount";

const initialState = [
    {
        id: "1",
        name: "Painting",
        price: 1000,
        quantity: 2
    },
    {
        id: "2",
        name: "Vase",
        price: 800,
        quantity: 3
    },
    {
        id: "3",
        name: "Sculpture",
        price: 3000,
        quantity: 1
    }
]

export const Container = () => {
    return (
        <div>
            <InputForm />
            <Loader />
            <CardList items={initialState} />
            <TotalAmount items={initialState}/>
        </div>
    );
};