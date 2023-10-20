import DaumPostCode from 'react-daum-postcode';
import {changeDTO} from "./ChangeDTO";

const DaumPost = ({setPostDTO, setPostOn}) => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        const {addressType, bname, buildingName} = data
        if (addressType === 'R') {
            if (bname !== '') {
                extraAddress += bname;
            }
            if (buildingName !== '') {
                extraAddress += `${extraAddress !== '' && ', '}${buildingName}`;
            }
            fullAddress += `${extraAddress !== '' ? ` ${extraAddress}` : ''}`;
        }
        //fullAddress -> 전체 주소반환

        setPostOn(false);
        changeDTO(setPostDTO,'addr1', fullAddress)
        changeDTO(setPostDTO,'zip', data.zonecode)
    }
    return (<div style={{
        position: 'fixed',
        width: '100%',
        top: '0',
        left: '0',
        height: '100%',
        zIndex: '100',

        background: 'rgba(0, 0, 0, 0.5)',
    }}>
        <div
            style={{width: '30%', transform: 'translate(120%,50%)', position: 'absolute'}}
        >
            <div style={{backgroundColor: '#fefaef', height: '20px'}}>
                <p className='close'
                   onClick={()=>setPostOn(false)}
            ></p></div>
            <DaumPostCode
                onComplete={handleComplete} className="post-code"/>
        </div>
    </div>);
}
export default DaumPost;