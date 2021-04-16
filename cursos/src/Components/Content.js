import React from 'react';
import Part from "./Part";
//Mapea los valores
export default function Content(props){
    return (
        <div>
            {
                props.parts.map((part, index) => {
                    const { id,name,exercises } = part
                    return (
                        <Part key={id} enunciado={name} ejercicio={exercises} ></Part>
                    );
                })
            }

        </div>
    )
}