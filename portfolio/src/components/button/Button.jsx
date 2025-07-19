import './Button.css'
export default function Button(props) {
    return (
        <div className={props.className}
            style={{
                '--btn-bg-color': props.theme.text,
                '--btn-text-color': props.theme.body
            }}>
            <a
                href={props.href}
                className="resume-button"
                target={props.newTab && "_blank"}
            >
                <span>
                    {props.text}
                </span>

            </a>
        </div>
    )
}
