import './Button.sass';

export const Button = ({
    title = 'Кнопка',
    action = Function.prototype,
    color = 'white'
}) => {
    return (
        <button className={`btn btn_color_${color}`} onClick={action}>{title}</button>
    )
}



