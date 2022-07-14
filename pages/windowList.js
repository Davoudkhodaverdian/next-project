import { FixedSizeList as List } from "react-window";


export default function WindowList() {


    const Row = ({index,style})=>(
        <div className={index % 2 ? "bg-yellow-200" : ""} style={style}>
            Row {index}
        </div>
    );

    return (
        <div>
            <List
                className="List"
                height={300}
                itemCount={1000}
                itemSize={35}
                width={100}
            >
                {Row}
            </List>
        </div>
    )
}