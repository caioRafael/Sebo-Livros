import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBook1604328233968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'book',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment',
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'synopsis',
                    type: 'varchar'
                },
                {
                    name: 'author',
                    type: 'varchar'
                },
                {
                    name: 'year',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal',
                    scale: 2,
                    precision: 4
                },
                {
                    name: 'amount',
                    type: 'integer'
                },
                {
                    name:'image',
                    type:'vachar',
                },
                {
                    name: 'user_id',
                    type: 'integer'
                }
            ],
            foreignKeys:[
                {
                    name:'salesman',
                    columnNames:['user_id'],
                    referencedTableName: 'user',
                    referencedColumnNames:['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('book');
    }

}
