







import * as React from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { Category } from "../../models/category"








interface IPeacockProperties 
{
    focus: boolean; 
    category: Category;
}


function Peacock(props: IPeacockProperties)
{


    const navigate = useNavigate(); 

    const classList = React.useMemo(() => 
    {
        const responce = []; 
        responce.push(`peacock`); 

        if (props.focus) { responce.push(`selected`) }; 

        return responce.join(` `);

    }, [props.focus]);

    return (

        <div
        onClick={ (event) => 
        {
            if ( (event.target as HTMLElement).tagName != `IMG` )  { return; }

            navigate(`/store/${ props.category.id }`) 

        }}
        className={ classList }>
            <div className="tail">
                <div className="feather primary">{ <img src={ props.category.items[0].imageURL } alt="" /> }</div>
                <div className="feather secondary">{ <img src={ props.category.items[1].imageURL } alt="" /> }</div>
                <div className="feather tertiary">{ <img src={ props.category.items[2].imageURL } alt="" /> }</div>
            </div>

            <div className="dropshadow"></div>
        </div>
    )

}

export { Peacock }











