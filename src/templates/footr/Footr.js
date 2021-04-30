import { Button } from '../../components/button/Button'
import './footrStyle.css'

export const Footr = () => {
    return (
        <div className='contentFootr'>
            <div className='titleFootr'>
                Basic Elements
            </div>
            <div className='contentDescFootr'>
                <text className='textDescFootr'>Buttons</text>
            </div>
            <div className='buttonFootr'>
                <Button styleInfo="button3" content="BUTTON"/>
                <Button styleInfo="button3" iconInfo='faShoppingBag' content="WITH ICON"/>
                <Button styleInfo="button3" iconInfo='faShoppingBag'/>
            </div>
        </div>
    )
}