import React, { useRef } from "react";

export default function Form({ fcAdicionar }) {
    const elementRef = useRef();

    return (
        <form className="form-add-item" action="#" method="post">
            <fieldset>
                <div className="form-group mb-3">
                    <label htmlFor="item">Adicionar Novo Item na Lista:</label>
                    <input type="text" className="form-control" id="item" ref={elementRef} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={() => {
                        if (elementRef.current.value) {
                            fcAdicionar(elementRef.current.value)
                        }
                        elementRef.current.value = '';
                    }}>
                    Adicionar
                </button>
            </fieldset>
        </form>
    );
}
