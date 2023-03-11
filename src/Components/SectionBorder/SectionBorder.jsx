import './SectionBorder.sass'

export const SectionBorder = ({backgroundColor, data}) => {

    const style = {

        background: backgroundColor

      };


    return(
        <div className="sectionBorder" style={style}></div>
    )
    
}