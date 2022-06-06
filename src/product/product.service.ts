import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductInterface } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<ProductInterface>) { }

    async getProducts(): Promise<ProductInterface[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productID: String): Promise<ProductInterface> {
        const product = await this.productModel.findById(productID);
        return product;
    }

    async createProducts(createProduct: ProductInterface,): Promise<ProductInterface> {
        const newProduct = new this.productModel(createProduct);
        return await newProduct.save();
    }

    async updateProducts(productID: String, createProduct: ProductInterface,): Promise<ProductInterface> {
        const updateProduct = await this.productModel.findByIdAndUpdate(productID, createProduct, {
            new: true
        });
        return updateProduct;
    }

    async deleteProducts(productID: String): Promise<ProductInterface> {
        const deleteProducts = await this.productModel.findOneAndDelete(productID);
        return deleteProducts;
    }

    getHello(): string {
        return 'hola pelutudo';
      }
}

