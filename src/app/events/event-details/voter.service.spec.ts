import { of } from "rxjs"
import { VoterService } from "."
import { ISession } from ".."

describe('VoterService',()=>{
    let voterService:VoterService, mockHttp

    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService = new VoterService(mockHttp)
    })

    describe('deleteVoter',()=>{
        it('should remove the voter from list of voters',()=>{
            var session = {id:6, voters:["joe","john"]}
            mockHttp.delete.and.returnValue(of(false))
    
            voterService.deleteVoter(3, <ISession>session, "joe")
            
            expect(session.voters.length).toBe(1)
            expect(session)
        })
    })
})