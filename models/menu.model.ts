import { IMenu } from '../types/menu.types';

import { model, Schema } from 'mongoose';

const menuSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export default model<IMenu>('Menu', menuSchema);