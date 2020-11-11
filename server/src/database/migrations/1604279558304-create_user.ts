import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1604279558304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'user',
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
                    name:'name_first',
                    type:'varchar',
                },
                {
                    name:'name_last',
                    type:'varchar',
                },
                {
                    name:'number',
                    type:'varchar',
                },
                {
                    name:'email',
                    type:'varchar',
                },
                {
                    name:'password',
                    type:'varchar',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
