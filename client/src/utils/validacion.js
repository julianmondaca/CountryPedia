export default function validate(name, value){
    
    switch(name){
        case 'name':
         if(value.length > 2){
			return false
		}else{
			return true
	    	}

        case 'duration':
        if(value.includes('hs') || value.includes('min')){
            return false
        }else{
            return true
        }

        case 'season':
            if(value !== 'season'){
                return false
            }else{return true}

        case 'difficulty':
            if(value != 0){
            return false
            }else{return true}

        default: return true
    }
}