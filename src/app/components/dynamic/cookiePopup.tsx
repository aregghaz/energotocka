import React from 'react'
interface IProps {
    handleClickPopUp: () => void
}
const CookiePopup:React.FC<IProps> = ({ handleClickPopUp}) => {
  return (
    <div className='cookie_container'>
        <div className='text_coookie'>
            <p>Если вы продолжаете использовать наш интернет-сайт,  <br />
то вы соглашаетесь на обработку файлов куки (англ. «cookie»), тем самым,  <br />
помогаете нам вести наш интернет-сайт комфортнее и полезнее для каждого человека</p>
        </div>
        <div>
            <button className='btn_cookie' onClick={handleClickPopUp}>Подтвердить и скрыть</button>
        </div>
    </div>
  )
}

export default CookiePopup