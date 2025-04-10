import { NextResponse } from "next/server";


export async function POST(req){
    try {
        const {name, email, message} = await req.json()   
        if(!name || !email || !message || name === '' || email === '' || message === '')
            {
                return NextResponse.json({message:'Fill all field'}, {status:'202'})
            }   
        return NextResponse.json({message: 'success'}, {status:'200'})      
    } catch (error) {
        return NextResponse.json({message:error},{status:'500'})        
    }
}

