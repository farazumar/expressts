import cors from 'cors';

export default function loadAppFeatures(app:any):void {
    console.log("inside server.ts")
    app.use(cors())
}