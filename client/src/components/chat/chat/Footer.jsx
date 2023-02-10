
import { Box, InputBase,styled } from "@mui/material";

import AttachFileIcon from '@mui/icons-material/AttachFile';

import MicIcon from '@mui/icons-material/Mic';

import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

import { uploadFile } from "../../../service/api";

import { useEffect } from "react";


const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;


const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;


const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;


const ClipIcon = styled(AttachFileIcon)`
    transform: rotate(40deg)
`;





const Footer = ({sendText,setvalue,value, file, setFile ,setImage}) => {


     useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                 let response = await uploadFile(data);
                 setImage(response.data);
            }
        }
        getImage();
    }, [file])




    const onFileChange = (e) =>
    {
    setFile(e.target.files[0]);
    setvalue(e.target.files[0].name);
    }

  return (
    
    <Container>
        
        <EmojiEmotionsOutlinedIcon/>
        <label htmlFor="fileInput">
            <ClipIcon/>
        </label>
        <input type ='file'
               id="fileInput"
               style={{display : 'none'}}
               onChange={(e)=>onFileChange(e)}
        />
        <Search>
            <InputField
            
            placeholder='Type a message'
            onChange={(e)=>setvalue(e.target.value)}
            onKeyPress={(e)=>sendText(e)}
            value={value}
            />
        </Search>
        <MicIcon/>
    </Container>
  )
}

export default Footer;