import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost: 3001/graph1",
    documents: "src/**/*.ts",
    generates: {
        "src/gql/": {
            preset: "client",
            plugins: [],
            presentMasking: false,
              fragmentMasking: false,
        },
      },
   },
 };
 
 export default config; 
 

