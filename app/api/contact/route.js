import { NextResponse } from "next/server"
import fs from 'fs'

export async function POST(req){
    const {name, email, message} = await req.json();
    if(!email || !name || !message || name === ''|| email === '' || message === ''){
        return NextResponse.json({message:"Fill all the field"}, {status:"201"})
    }
    try {
        const data = await fs.promises.readdir('contactData')
        await fs.promises.writeFile(`contactData/${data.length+1}.json`, JSON.stringify({name, email, message}))
        return NextResponse.json({message:"success"}, {status:"202"})  
    } catch (error) {
        console.error("Error writing file:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });    
    } 
}

export async function GET() {
    try {
        // Read all the files in the contactData folder
        const files = await fs.promises.readdir('contactData');

        // Initialize an array to hold the parsed data from all files
        const allData = [];

        // Iterate over each file, read and parse its contents
        for (const file of files) {
            const data = await fs.promises.readFile(`contactData/${file}`, 'utf-8');
            const parsedData = JSON.parse(data);
            allData.push(parsedData);
        }

        // Return the collected data
        return NextResponse.json(allData, { status: 200 });

    } catch (error) {
        console.error("Error reading files:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
