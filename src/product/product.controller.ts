import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Res,
    HttpStatus,
    Body,
    Param,
    NotFoundException
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductInterface } from './interfaces/product.interface';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post('/create')
    async createPost(@Res() res, @Body() createProduct: ProductInterface) {
        const create = await this.productService.createProducts(createProduct);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfuly Created',
            create
        });
    }
    @Get()
    async getProducts(@Res() res){
        const product = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            "message": "Products Successfully Consulted",
            product
        });
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        
        console.log(product)
        if (!product)  throw new NotFoundException("product does not exists")
        

        return res.status(HttpStatus.OK).json({
            "message": "Product Successfully Consulted",
            product
        })
    }

    @Delete("/delete/:productID")
    async deleteProduct(@Res() res,@Param("productID") productID){
        const productDeleted = await this.productService.deleteProducts(productID);
        if(!productDeleted) throw new NotFoundException("Product does not exists")
        return res.status(HttpStatus.OK).json({
            "message": "product successfully Deleted",
            productDeleted
        })
    }

    @Put("/update/:productID")
    async updateProduct(@Res() res, @Body() updateProduct: ProductInterface, @Param("productID") productID){
        const updatedProduct = await this.productService.updateProducts(productID, updateProduct);
        if(!updateProduct) throw new NotFoundException("Product does not exists")
        return res.status(HttpStatus.OK).json({
            "message": "Product Updated Successfully",
            updateProduct
        })
    }

}
