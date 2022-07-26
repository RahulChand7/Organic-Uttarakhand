import React, { useState, useEffect } from 'react'
// import {deleteCategory, editCategory} from '../../api/institute'
import Snackbar from '@material-ui/core/Snackbar';

export default function RenderSingleSlot(props) {
    const {row,deleteslot,index}=props
    const[icon, setIcon] = useState("")
    const [Categoryname, setCategoryname] = useState("")
    const [sortOrder, setSortOrder] = useState("")
    const[SnackBarMessage, setSnackBarMessage] = useState("")
    const[isSnackBarShow, setIsSnackBarShow] = useState(false)



    const deleteCategoryCallback=(response) =>{
        if(response.status==200){
            console.log('category has been deleted')
            deleteslot(row.s_no)
            setSnackBarMessage("Category Deleted Successfully")
            setIsSnackBarShow(true)
            
        } else {
            setSnackBarMessage("Something went wrong")
            setIsSnackBarShow(true)
            console.log('Ooops! Something went wrong while deleting!')
        }
    }


    const action4DeleteCategory=(id, label, index)=>{
        
        if(window.confirm('Deleting?  '+ label)){
           
            // deleteCategory(id, (response)=>deleteCategoryCallback(response,index))
            // delele function
            
        } else{
            console.log('cancel mission del')
        }

    }


    const editCallback=(response)=>{
        if(response.status==200){
            response.json().then(data=>{
                console.log('response after updated', data)
            })
        }
    }


    const actionEdit4Category=(id,)=>{
        if(window.confirm('Are you sure to Save Changes')){
           
            // editCategory(id, icon, Categoryname, sortOrder, editCallback)
            // edit function
            
            setSnackBarMessage("Institute Category Details Successfully")
            setIsSnackBarShow(true)
            
        } else{
            setSnackBarMessage("Something went wrong")
            setIsSnackBarShow(true)
            console.log('cancel mission del')
        }
    }

    const closeSnack=()=>{
        setIsSnackBarShow(false)
    }
    
    return (
        <>
        <tr>
            <td align="center">{props.index+1}</td>
            <td align="center">{row.seat_no}</td>
            <td align="center">{row.student_id}</td>
            <td align="center">{row.start_time}</td>
            <td align="center">{row.end_time}</td>
            <td align="center">
                <button className="btn btn-danger m-1" onClick={()=> deleteslot(row.s_no,index)}> Delete </button>
            </td>
        </tr>



        {/* Modal 4 Edit category */}
        <div class="modal fade" id={"exampleModalCentered"+props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalCenteredLabel">Edit Modal</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        
                        <input type="text" class="form-control mt-3" onChange={e => setCategoryname(e.target.value)} defaultValue={props.row.name} />

                        <input type="text" class="form-control mt-3" onChange={e => setSortOrder(e.target.value)} defaultValue={props.row.sortOrder} />

                        
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={()=> actionEdit4Category()}>Save changes</button>
                </div>
                </div>
            </div>
            <Snackbar
                open={isSnackBarShow}
                onClose={(e)=>closeSnack(e)}
                TransitionComponent="TransitionUp"
                message={SnackBarMessage}
            />
            </div>
        </>
    )
}
