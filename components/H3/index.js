const H3 = (props) => (
    <h3>
        {props.children.toLowerCase()}
        <style jsx> {`
            h3 {
                font-size:1.5em;
                font-variant: small-caps;
            }

            h3:before {
                margin-right: 1rem;
                width:0.8rem;
                height:0.8rem;
                content:"";
                display:inline-block;
                position relative;
                background-color: #cec8c8 ;
            }
           `}
        </style>
    </h3>
);

export default H3;

