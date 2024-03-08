import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema
		.createTable("company", (table) => {
			table.increments();
			table.string("name").notNullable();
			table.string("email").notNullable();
			table.string("password_hash").notNullable();
			table.string("country").notNullable();
			table.string("industry").notNullable;
			table.boolean("verified").defaultTo(false);
		})
		.createTable("company_confirmation", (table) => {
			table.increments();
			table.integer("company_id").references("id").inTable("company");
			table.string("confirmation_code", 20).notNullable();
		})
		.createTable("subscription", (table) => {
			table.increments();
			table.string("title", 100).notNullable();
			table.integer("max_file_read").defaultTo(10);
			table.integer("max_users").defaultTo(1);
			table.integer("price");
		})
		.createTable("company_subscription", (table) => {
			table.increments();
			table
				.integer("subscription_id")
				.references("id")
				.inTable("subscription");
			table.integer("company_id").references("id").inTable("company");
			table.date("last_billing_date").nullable();
			table
				.date("next_billing_date")
				.defaultTo(knex.raw("CURRENT_DATE + INTERVAL '1 month'"));
		});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema
		.dropTable("company")
		.dropTable("company_confirmation")
		.dropTable("subscription")
		.dropTable("company_subscription");
}
