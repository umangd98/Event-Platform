import { Schema, Types, model, models, Document } from "mongoose";

export interface IEvent extends Document {
    _id: Types.ObjectId;
    title: string;
    description?: string;  // Optional because 'required: false'
    location?: string;     // Optional because 'required: false'
    createdAt: Date;       // Automatically set to Date.now, but always present
    imageUrl: string;
    startDate: Date;       // Automatically set to Date.now, but always present
    endDate: Date;         // Automatically set to Date.now, but always present
    price?: number;        // Optional because 'required: false'
    isFree: boolean;       // Automatically set to false, but always present
    url?: string;          // Optional because 'required: false'
    category: {_id: string, name: string};  // Reference to 'Category' model
    organizer: {_id: string, firstName: string, lastName: string};  // Reference to 'User' model
    
}


const EventSchema = new Schema({
    title: {type: String, required: true, unique: false},
    description: {type: String, required: false, unique: false},
    location: {type: String, required: false, unique: false},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true, unique: false},
    startDate: {type: Date, default: Date.now},
    endDate: {type: Date, default: Date.now},
    price: {type: Number, required: false, unique: false},
    isFree: {type: Boolean, default: false},
    url: {type: String, required: false, unique: false},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type: Schema.Types.ObjectId, ref: 'User'},
})


const Event = models.Event || model('Event', EventSchema)

export default Event