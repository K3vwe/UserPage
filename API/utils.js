import { writeFileSync } from 'fs';

function writeDataToFile(filename, content) {
    writeFileSync(filename, JSON.stringify(content), 'utf-8', (err) => {
        if(err){
            console.log(err)
        }
    })
};

export default writeDataToFile;