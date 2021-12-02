import React, { useState, useEffect } from 'react';
import { Button, notification } from 'antd';
import { Group } from 'antd/lib/avatar';
import neoDapi from 'neo-dapi';
import Neon, { wallet } from "@cityofzion/neon-js";
 

export const NeoDemo1 = () => {
    const [state, setState] = useState(0);
    const [neoline, setNeoLine] = useState();
    const [account, setAccount] = useState('')
    const [balance, setBalance] = useState([])
    
    useEffect(() => {
        window.addEventListener('NEOLine.NEO.EVENT.READY', ()=>{
            setNeoLine(new window.NEOLineN3.Init());
            setState(1); 
        })
    }, []);
  

       

    const roundStart = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'roundStart',
            args: [],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1
                }
            ]
        }
       
        const ret = await neoline.invoke(params);
        document.getElementById("output").innerText=JSON.stringify(ret);

    }
    
    const uploadProject = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'uploadProject',
            args: [
                {
                    "type": "Integer",
                    "value": 1
                }
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1
                }
            ]
        }
       
        const ret = await neoline.invoke(params);
        document.getElementById("output").innerText=JSON.stringify(ret);

    }

    const donate = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'donate',
            args: [
                {
                    "type": "Integer",
                    "value": "100"
                }
            ],
            fee: '1.0',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 16,  
                    allowedContracts:["0xd2a4cff31913016155e38e474a2c06d08be276cf", "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"]
                }
            ]
        }
       
        const ret = await neoline.invoke(params);
        document.getElementById("output").innerText=JSON.stringify(ret);

    }
 

   

    const votingCost = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'votingCost',
            args: [
                {
                    "type": "Hash160",
                    "value": "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e"
                },
                {
                    "type": "Integer",
                    "value": "1"
                },
                {
                    "type": "Integer",
                    "value": "2"
                }
            ],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ] 

        }
         
        const ret = await neoline.invokeRead(params);        
        document.getElementById("output").innerText=JSON.stringify(ret);
    }

    const vote = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'vote',
            args: [
                {"type":"Integer","value":"1"},
                {"type":"Integer","value":"2"}
            ],
            fee: '0.0001',
            broadcastOverride: false,  
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 16,
                    allowedContracts:["0xd2a4cff31913016155e38e474a2c06d08be276cf", "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"]                   
                }
            ]                   
        }
       
        const ret = await neoline.invoke(params);
        document.getElementById("output").innerText=JSON.stringify(ret);

    }

  
    

    const roundOver = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'roundOver',
            args: [],  
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]                
        }
        
        const ret = await neoline.invokeRead(params);
        document.getElementById("output").innerText=JSON.stringify(ret);


    }
    const takeOutGrants = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'takeOutGrants',
            args: [
                {"type":"Integer","value":1},
                {"type":"Integer","value":100}
            ],  
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 16,
                    allowedContracts:["0xd2a4cff31913016155e38e474a2c06d08be276cf", "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"]                   
                }
            ]                
        }
        
        const ret = await neoline.invoke(params);
        document.getElementById("output").innerText=JSON.stringify(ret);


    }
    const grantsOf = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',
            operation: 'grantsOf',
            args: [
                {"type":"Integer","value":1},
            ],  
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]                
        }
        
        const ret = await neoline.invokeRead(params);
        document.getElementById("output").innerText=JSON.stringify(ret);


    }
   const getTotalTax = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getTotalTax',
            args: [],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
         neoline.invokeRead(params).then(ret=>{             
            document.getElementById("output").innerText=JSON.stringify(ret);
        })        
    }
    const getTaxPoint = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getTaxPoint',
            args: [],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
         neoline.invokeRead(params).then(ret=>{             
            document.getElementById("output").innerText=JSON.stringify(ret);
        })        
    }

    const getInterval= async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getInterval',
            args: [],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
         neoline.invokeRead(params).then(ret=>{             
            document.getElementById("output").innerText=JSON.stringify(ret);
        })        
    }
    const withdraw = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'withdraw',
            args: [ 
                     {"type":"Integer","value":1}
                 ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 16  ,
                    allowedContracts:["0xd2a4cff31913016155e38e474a2c06d08be276cf", "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"]                  
                }
            ]
        } 
        const ret = await neoline.invoke(params) ;            
        document.getElementById("output").innerText=JSON.stringify(ret);
           
    }
    const getOwner = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getOwner',
            args: [],           
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
         neoline.invokeRead(params).then(ret=>{            
            document.getElementById("output").innerText=JSON.stringify(ret);
        })        
    }

    const getToken = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getToken',
            args: [],           
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
         neoline.invokeRead(params).then(ret=>{            
            document.getElementById("output").innerText=JSON.stringify(ret);
        })        
    }
    
    const banProject = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'banProject',
            args: [
                {
                    "type": "Integer",
                    "value": "1"
                },
                 {
                    "type": "Boolean",
                    "value": "true"
                } 
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params);
           
         document.getElementById("output").innerText=JSON.stringify(ret);
             
    }
   
    

    const allProjectIds = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'allProjectIds',
            args: [
                {"type":"Integer","value":"1"}
            ],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invokeRead(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }

    
    const getRoundInfo = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getRoundInfo',
            args: [
                {"type":"Integer","value":"1"}
            ],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
         neoline.invokeRead(params).then(ret=>{             
            document.getElementById("output").innerText=JSON.stringify(ret);
        })        
    }
    
   
    const getProjectInfoById = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getProjectInfoById',
            args: [
                {
                    "type": "Integer",
                    "value": "1"
                }
            ],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invokeRead(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }

    const getAllProjects = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getAllProjects',
            args: [
                {
                    "type": "Integer",
                    "value": "1"
                }
            ],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invokeRead(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }
    
    const getVoterInfoByProjectId= async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getVoterInfoByProjectId',
            args: [
                {
                    "type": "Integer",
                    "value": "1"
                }
            ],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invokeRead(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }
    
    const getVotingUnit = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'getVotingUnit',
            args: [
                
            ],
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invokeRead(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }

   
    const changeOwner = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'changeOwner',
            args: [
                {
                    "type": "Hash160",
                    "value": "0x088aa2ae44124a5ab30d76097e168caf4e48edf8"
                    }  
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }
    const setTaxPoint = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'setTaxPoint',
            args: [
                {
                    "type": "Integer",
                    "value": "500"
                }  
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }
    const setInterval_time = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'setInterval',
            args: [
                {
                    "type": "Integer",
                    "value": "10000"
                }
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }
    const setVotingUnit = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'setVotingUnit',
            args: [
                {
                    "type": "Integer",
                    "value": "1"
                } 
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }

    const setToken = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'setToken',
            args: [
                {
                    "type": "Hash160",
                    "value": "0xd2a4cff31913016155e38e474a2c06d08be276cf"
                } 
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }

    
    const dangerSetEndTime = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'dangerSetEndTime',
            args: [
                {
                    "type": "Integer",
                    "value": "30000"
                } 
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params);          
        document.getElementById("output").innerText=JSON.stringify(ret);
               
    }


    const update = async ()=>{
        const params = {
            scriptHash: '0xe45e81166297d1b16cef0778ed9514e2b24c0337',         
            operation: 'update',
            args: [
                {
                    "type": "ByteArray",
                    "value": "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"
                  },
                  {
                    "type": "String",
                    "value": "{\"name\":\"Dora-Quadratic\",\"groups\":[],\"features\":{},\"supportedstandards\":[\"NEP-17\"],\"abi\":{\"methods\":[{\"name\":\"verify\",\"offset\":75,\"safe\":false,\"returntype\":\"Boolean\",\"parameters\":[]},{\"name\":\"_deploy\",\"offset\":78,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"data\",\"type\":\"Any\"},{\"name\":\"update\",\"type\":\"Boolean\"}]},{\"name\":\"getOwner\",\"offset\":336,\"safe\":false,\"returntype\":\"Hash160\",\"parameters\":[]},{\"name\":\"update\",\"offset\":380,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"nefFile\",\"type\":\"ByteArray\"},{\"name\":\"manifest\",\"type\":\"String\"}]},{\"name\":\"destroy\",\"offset\":422,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[]},{\"name\":\"getVotingUnit\",\"offset\":458,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[]},{\"name\":\"getTaxPoint\",\"offset\":512,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[]},{\"name\":\"getSupportPool\",\"offset\":559,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[{\"name\":\"_round\",\"type\":\"Integer\"}]},{\"name\":\"getPreTaxSupportPool\",\"offset\":698,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[{\"name\":\"_round\",\"type\":\"Integer\"}]},{\"name\":\"allProjects\",\"offset\":851,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"_round\",\"type\":\"Integer\"}]},{\"name\":\"rankingList\",\"offset\":1005,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"_round\",\"type\":\"Integer\"}]},{\"name\":\"rankingListPaged\",\"offset\":1514,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"_round\",\"type\":\"Integer\"},{\"name\":\"_page\",\"type\":\"Integer\"},{\"name\":\"_size\",\"type\":\"Integer\"}]},{\"name\":\"roundInfo\",\"offset\":2125,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"_round\",\"type\":\"Integer\"}]},{\"name\":\"votingCost\",\"offset\":2583,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"_from\",\"type\":\"Hash160\"},{\"name\":\"_projectID\",\"type\":\"Integer\"},{\"name\":\"_votes\",\"type\":\"Integer\"}]},{\"name\":\"grantOf\",\"offset\":3053,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"}]},{\"name\":\"dangerSetEndTime\",\"offset\":3535,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_extend\",\"type\":\"Integer\"}]},{\"name\":\"roundOver\",\"offset\":3869,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[]},{\"name\":\"changeOwner\",\"offset\":4091,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"address\",\"type\":\"Hash160\"}]},{\"name\":\"banProject\",\"offset\":4195,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"},{\"name\":\"_ban\",\"type\":\"Boolean\"}]},{\"name\":\"setTaxPoint\",\"offset\":4755,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_taxPoint\",\"type\":\"Integer\"}]},{\"name\":\"setInterval\",\"offset\":4907,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_interval\",\"type\":\"Integer\"}]},{\"name\":\"setVotingUnit\",\"offset\":5067,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_uint\",\"type\":\"Integer\"}]},{\"name\":\"roundStart\",\"offset\":5227,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[]},{\"name\":\"getStartTime\",\"offset\":5829,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[]},{\"name\":\"onNEP17Payment\",\"offset\":6005,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"from\",\"type\":\"Hash160\"},{\"name\":\"amount\",\"type\":\"Integer\"},{\"name\":\"data\",\"type\":\"Any\"}]},{\"name\":\"donate\",\"offset\":6009,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_amount\",\"type\":\"Integer\"}]},{\"name\":\"getTax\",\"offset\":6628,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[]},{\"name\":\"getSupportPool\",\"offset\":6672,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[]},{\"name\":\"getProjectInfoById\",\"offset\":6856,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"}]},{\"name\":\"getProjects\",\"offset\":7030,\"safe\":false,\"returntype\":\"Array\",\"parameters\":[{\"name\":\"currentRound\",\"type\":\"Integer\"}]},{\"name\":\"uploadProject\",\"offset\":7225,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"}]},{\"name\":\"getRound\",\"offset\":7971,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[]},{\"name\":\"getEndTime\",\"offset\":8068,\"safe\":false,\"returntype\":\"Map\",\"parameters\":[]},{\"name\":\"vote\",\"offset\":8155,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"},{\"name\":\"_votes\",\"type\":\"Integer\"}]},{\"name\":\"getProjectSupportArea\",\"offset\":9308,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"}]},{\"name\":\"getTotalSupportArea\",\"offset\":9324,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[{\"name\":\"_round\",\"type\":\"Integer\"}]},{\"name\":\"getProjectvotes\",\"offset\":9470,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"}]},{\"name\":\"takeOutGrants\",\"offset\":9598,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[{\"name\":\"_projectID\",\"type\":\"Integer\"},{\"name\":\"_amount\",\"type\":\"Integer\"}]},{\"name\":\"withdraw\",\"offset\":9936,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[]},{\"name\":\"balance\",\"offset\":10197,\"safe\":false,\"returntype\":\"Integer\",\"parameters\":[{\"name\":\"account\",\"type\":\"Hash160\"}]},{\"name\":\"transfer_NEO\",\"offset\":10207,\"safe\":false,\"returntype\":\"Boolean\",\"parameters\":[{\"name\":\"from\",\"type\":\"Hash160\"},{\"name\":\"to\",\"type\":\"Hash160\"},{\"name\":\"amount\",\"type\":\"Integer\"}]},{\"name\":\"_initialize\",\"offset\":10246,\"safe\":false,\"returntype\":\"Void\",\"parameters\":[]}],\"events\":[{\"name\":\"Transfer\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Hash160\"},{\"name\":\"arg3\",\"type\":\"Hash160\"},{\"name\":\"arg4\",\"type\":\"Integer\"}]},{\"name\":\"BalanceOf\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Hash160\"},{\"name\":\"arg3\",\"type\":\"Integer\"}]},{\"name\":\"BanProject\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Integer\"},{\"name\":\"arg3\",\"type\":\"Boolean\"}]},{\"name\":\"TaxPointChange\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Integer\"}]},{\"name\":\"RoundIntervalChange\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Integer\"}]},{\"name\":\"VotingUnitChange\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Integer\"}]},{\"name\":\"DDLChange\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Integer\"}]},{\"name\":\"OwnerChange\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"String\"},{\"name\":\"arg2\",\"type\":\"Hash160\"}]},{\"name\":\"Log\",\"parameters\":[{\"name\":\"arg1\",\"type\":\"Integer\"},{\"name\":\"arg2\",\"type\":\"Integer\"}]}]},\"permissions\":[{\"contract\":\"0xacce6fd80d44e1796aa0c2c625e9e4e0ce39efc0\",\"methods\":[\"deserialize\",\"serialize\"]},{\"contract\":\"0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5\",\"methods\":[\"balanceOf\",\"transfer\"]},{\"contract\":\"0xfffdc93764dbaddd97c48f252a53ea4643faa3fd\",\"methods\":[\"destroy\",\"update\"]}],\"trusts\":[],\"extra\":{\"Author\":\"Neo\",\"Email\":\"dev@neo.org\",\"Description\":\"Thisisacontractexample\"}}"
                  }
            
            ],
            fee: '0.0001',
            broadcastOverride: false,
            signers: [
                {
                    account: "0x6fd49ab2f14a6bd9a060bb91fdbf29799a885a9e",
                    scopes: 1                   
                }
            ]
        } 
        const ret = await neoline.invoke(params)
        document.getElementById("output").innerText=JSON.stringify(ret);
             
    }
  

   
    const balance_array = [];
    balance.forEach((ele)=>{
        balance_array.push(<div key={ele.symbol} className="btt">{ele.symbol}:{ele.amount}</div>)
    })
    return (
        <div className="web3demo" >
            {state === 0 && <div className="message">当前无钱包链接, 请安装</div>}
            {state === 1 &&
                <div className="message">                                     
                    {balance_array}
                    <div id="Response"> Main methods </div>
                    <hr></hr>
                    <Group>
                        <div className="btt">
                            <Button onClick={roundStart}>roundStart</Button>
                        </div> 
                    </Group> 
                    <Group>
                         <div className="btt">
                            <Button onClick={uploadProject}>uploadProject</Button>
                        </div>
                    </Group>                     
                    <Group>
                            <div className="btt">
                            <Button onClick={donate}>donate</Button>
                        </div> 
                    </Group>
                   
                       
                    <Group>
                          <div className="btt">
                            <Button onClick={votingCost}>votingCost</Button>
                        </div> 
                    </Group>
                    <Group>
                             <div className="btt">
                            <Button onClick={vote}>vote</Button>
                        </div> 
                    </Group>
                    <Group>
                           <div className="btt">
                            <Button onClick={takeOutGrants}>takeOutGrants</Button>
                        </div>
                    </Group>
                    <Group>
                            <div className="btt">
                            <Button onClick={grantsOf}>grantsOf</Button>
                        </div> 
                        </Group>
                    <Group>
                          <div className="btt">
                            <Button onClick={withdraw}>withdraw</Button>
                        </div> 
                    </Group>
                    <Group>
                          <div className="btt">
                            <Button onClick={banProject}>banProject</Button>
                        </div>  
                    </Group>
                    
                     <Group>
                             <div className="btt">
                            <Button onClick={roundOver}>roundOver</Button>
                        </div>
                    </Group>
                    <div id="Response"> Setting </div>
                    <hr></hr>
                    <Group>
                           <div className="btt">
                            <Button onClick={setTaxPoint}>setTaxPoint</Button>
                        </div> 
                    </Group>
                    <Group>
                             <div className="btt">
                            <Button onClick={setInterval_time}>setInterval</Button>
                        </div>
                    </Group>
                    <Group>
                           <div className="btt">
                            <Button onClick={setVotingUnit}>setVotingUnit</Button>
                        </div>
                    </Group>
               
                   
                    <Group>
                           <div className="btt">
                            <Button onClick={setToken}>setToken</Button>
                        </div> 
                    </Group>
                    <Group>
                           <div className="btt">
                            <Button onClick={dangerSetEndTime}>dangerSetEndTime</Button>
                        </div> 
                    </Group>
                        
                    <Group>
                           <div className="btt">
                            <Button onClick={changeOwner}>changeOwner</Button>
                        </div> 
                    </Group>

                    <Group>
                           <div className="btt">
                            <Button onClick={update}>update</Button>
                        </div> 
                    </Group>
                    
                    <div id="Response"> GetInfo </div>
                    <hr></hr>
                                   
                  
                    <Group>
                            <div className="btt">
                            <Button onClick={allProjectIds}>allProjectIds</Button>
                        </div>
                    </Group>
                    <Group>
                            <div className="btt">
                            <Button onClick={getProjectInfoById}>getProjectInfoById</Button>
                        </div> 
                    </Group>
                    <Group>
                            <div className="btt">
                            <Button onClick={getAllProjects}>getAllProjects</Button>
                        </div> 
                    </Group>
                    <Group>
                            <div className="btt">
                            <Button onClick={getVoterInfoByProjectId}>getVoterInfoByProjectId</Button>
                        </div> 
                    </Group>
                    <Group>
                           <div className="btt">
                            <Button onClick={getRoundInfo}>getRoundInfo</Button>
                        </div>
                    </Group>
                  
                    <Group>
                           <div className="btt">
                            <Button onClick={getTaxPoint}>getTaxPoint</Button>
                        </div> 
                    </Group>
                    <Group>
                           <div className="btt">
                            <Button onClick={getTotalTax}>getTotalTax</Button>
                        </div> 
                    </Group>
                    <Group>
                           <div className="btt">
                            <Button onClick={getInterval}>getInterval</Button>
                        </div>  
                    </Group>
                    <Group>
                          <div className="btt">
                            <Button onClick={getOwner}>getOwner</Button>  
                        </div>  
                    </Group>
                    
                    <Group>
                           <div className="btt">
                            <Button onClick={getVotingUnit}>getVotingUnit</Button>
                        </div>  
                    </Group>
                    <Group>
                           <div className="btt">
                            <Button onClick={getToken}>getToken</Button>
                        </div>  
                    </Group>
                 
                    <div id="Response"> Response </div>
                    <hr></hr>
                    <div id="output"></div>
                </div>
               
            }
        </div>
    );
}