import  './Header.css'

const Header = (props) => {
   return(
    <header>
        <div className="header">
            Todo List ({props.result} / {props.length})
        </div>
    </header>
   )
}

export default Header