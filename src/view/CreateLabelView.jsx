// external
import styled from 'styled-components';

// internal
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';

const CreateLabelView = ({ createInfoState, setLabelOpen, setRandomColor, onChange, onSubmit }) => {
  const { labelName, desc } = createInfoState.createInput;
  const { randomColor } = createInfoState;

  return (
    <>
      <div style={{ border: '1px red solid', margin: '20px 0' }}>
        <Label backgroundColor="skyblue" color="black" width="200px">
          {labelName}
        </Label>
        <AddLabelArea onSubmit={onSubmit}>
          <div>
            <h4>Label name</h4>
            <Input width="200px" type="text" name="labelName" value={labelName === 'Label Priveiw' ? '' : labelName} onChange={(e) => onChange(e)} />
          </div>
          <div>
            <h4>Description</h4>
            <Input width="300px" type="text" name="desc" value={desc} onChange={(e) => onChange(e)} />
          </div>
          <div>
            <h4>Color</h4>
            <span
              style={{
                width: '30px',
                height: '30px',
                color: 'black',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => setRandomColor('#' + Math.round(Math.random() * 0xffffff).toString(16))}
            >
              <img
                style={{ display: 'inline-block', height: '20px' }}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQERIQEBIVEBUVFRUWFRUQFRAWFRUVFRUWFxUVFRUYHSggGBolHRUWITIhJSkrLi4uFx8zODMvNygtLisBCgoKDg0OGhAQGi0mICUtKy0tNS0tLS0uLS0rLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS8tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABIEAACAQICBgQMAwUFCAMAAAABAgADEQQxBQYSIUFRYXGBkQcTIiMyQlJicqGxwZKywiRTc4LRQ6Kz4fAUFjM0Y4Oj0hUlk//EABoBAQADAQEBAAAAAAAAAAAAAAACBAUDAQb/xAAxEQACAQMCAwUIAgMBAAAAAAAAAQIDBBEhMRJBcSJRkaHwBRMyYYGx0eFCwRRS8SP/2gAMAwEAAhEDEQA/AO4whCAEIQgBCEIAQhCAJeF5V6T03RoeSTtv7CWLdvBe2ZnGaRxOK3E+LT2KZI3e8c2+Q6JYo206izsu9/13lerdQpvG77l60+/yNRi9N4ekSGqAsPVS7EdBtl22kP8A3kDehRY/Gyr9LynweiwAN1pNGymUsf49KOiy34eRW/yKr10S8SyTS9Q50lH/AHD/AOk9f/NAekh/lYH62lJWxUhVsVJRtIvkeO6lHma6jpeg27bCnk/k/M7j2GT7zmlbFRMHpqvQPmnsPZO9Pw8Oy09l7ObWYPxPI+0Yp4mvD8HTLwvM/ojWijWISp5lzuAY+Sx91ufQfnNDM+dOVN8MlhmhTqRqLii8oS8LxYSBMIQhACEIQAhCEAIQhACEIQAhCEAIQhACEYr4hKa7TsFHMn/VzMxpPWm91oEIPbYXb+VLG3b3TrSozqvEUcqtaFJZkzQ4/SNKgL1GtfJRvZupRv7cpm8bpqvX8mneinR6ZHS3q9nfKdMXQ2i1SoWY5swck9ZtLTDaSwvq1Fv711/NaX420aWrTb6aGfK6lV0TSXXXx/B4wmjAN5HaZYqqpGamIuLjeOY3jvkOriZ0xKbyyC4YLCJlXESFWryLVxMhvXvO0KODhOsSK9U8JAq1zPZeeGsc5YikivJtjDNPJaFVCOkRktOuTnjB6YzQ6A1pejZK5NSlkDm6f+y9GY4cpmy08EzlVpQqR4ZL18jrSqypS4ov18/XTB2ShWWoodGDKwuCpuCOiPTlmrmsL4R7G70mPlJxB9pOno4zpuGrpURalMhlYXBGREwbi3lRlh7cmb1vcRrRyt+a9ch6EJntYNZ6OEBUecq+wDuX4zw6s/rOMISm+GKyztOcYLik8I0MJQan6VfF0GeoQWFRlNhYWsGAt1Nbsl/E4uEnF7oQkpxUlswhCEiSCEIQAhCEAIQhACUmmNNrRuiAO/G/or18z0fSOac0gaS7CHy2Gfsrz6+A7eUyNQS5a26n2pbFO6uHDsx3GcdiXqttVGLnpyHQBkB1SBUkquwUEkgAZkkADrMzGP1rwqEhS1U/9MbvxGwPZNmLjBdyMWUZTfNss6gkWpKR9bgcqJ7XA+imCaxqfSpEdTA/UCPfQfM99zNci3p4h6ZujFPhJHeOMn0NYjlWXbHtJubtGR+UrMGr16bVqVOoyK2yzBGIU2BsSMtxG/pkV54+GWqPdY6M1tPZqjbouKg4jJh1iMkzKU6z02DoxVhkRNDo7TtOvaniLU3yWoNynr5H5dUcbW44E9iVtTztT1isO1M2bLgRkZH2pLKexHDWjHdqMVqfEd093ibUZGCGWnktH66X3jP6yGTJJ5ItHotNDqjrEcK/i6hJoud/HxbH1x0cx2875omeS051KcakXGR0p1HTkpRNrrFruz3p4W6LkapuGb4R6o6c+qYt6hJuTeNlp5LSNKjCksRROrVlVeZHQvBfXutenyKP+IMv6BN3OX+DGvbFVE9ukT2o62HcW7p1CY94sVn9DXs5Zox9cwhCEqloIQhACEIQAnkm287p6kHTFTZov02X8RAPyJnqWXg8bwsmYxlY1HZz6xuOgeqO63zlZpHFJRptVqHZVRcn6AcycrSxqzm/hB0ialUYZT5NOzP0uRuB6gf702o9mOhivtS1M/p7TdXGN5V0pg+TTB3dBb2m+nCV6UZISjJCUZBRy8slxYWERkoyQlGSEoyQlGdIwOcpnYfBZhwmjaR4u9Vj1+MZB8kEnac1Tw2LuxXxVT95SsCT7y5N27+kRnwdH/66iORqj/yufvNPMmc5RqyaeHlmvTjGdKKaysI4hrJq1iMEb1F26ZNlqpfZPQ3sHoPYTM7UE+jKtJXUq6hlIsVYAgg5gg5icx1y1DamGr4IF1zaiLlkHEpxZfdzHC+QvUL1S7M9+/l+vt0KNeyce1T1Xdz+nf8AfqZ3QOsfi7UMT5dI7gxuSn3K/MS7x2DKWdTto28MN+45XI+swFSXmq2sXiD4iub0W3An+zJ/SePLPnLeXF5RT0ktS32om1JOk8EaRuu9DkeXQf6yDtTqmmso5tNPDHtqRsSnrDt/rPW1F2p5nAwQC08lo5iEtvGX0kcmSyeYPZaeCZ4LRC08Bf6jYjYx+H5MWU/zI1vnadmnA9D4nxeIoVPZqIT1Bxf5XnfJk367afyNf2e//Nr5/wBIIQhKJeCEIQAhCEAQys08fNp0uPysftLMyt096CfH+h5Ol8a6nOr8D6GcrG1yeG8zjmJY1aj1Dm7M34jedc0wbUaxH7t/ymctp0ZsRWTHm8EdKMfSjJKUo9RolmCIpZmNlVQSxPIAZzsonFzYwlKW2hdB18W2zQS4BsztuRfibn0C56JrdXdQCbVMYbDMUUO/+dxl1L38JvsNh0pKKdNQiqLBVAAHUBKda9jHSnq+/l+y5RspS1qaLu5/or9WtD/7HQFHbNQ3LE2sLtmFHAS3hCZcpOTbZqxiopJbIIQhPD057r1qIK+1icIoWrvL0xuWpzK8A/yPXvPIaykEggggkEEEEEbiCDkRPpnE4hKa7TnZH1PIDiZzDW18FUxPj/EqatrEX8kkZPVUbiwG63ffdbQtKs5dhrK9evkZ13ShHtp4f39eZV6q46oMKUxKk0reZLek49lRnsjdZspHLcolfEM5LMbk/wCrDkI1tTRjHhM+Usj21E2o3tTztT3JFDzG+4yvrLsm3dJm1PFVQwt3TxPB60Qi0bJg+7cY2WkjxCudxtPoXR2IFWjSqjJ0Rx/MoP3nzsWnc9RcR4zR+GPJNj/8yU/TM/2guzF9fXkaFg+1JdPXmX8IQmYaYRBFiQBYQhAEMgabXzV+TL8zs/qk8xutSDqVbeD2T2Lw0yMllNGL0nT2qVReaMO9TOaqJ2jE6DJ9B79Dj9Q/pKfQGolGifGYgiu17hP7NeVwfTPXu6OM1IXdOMW8mXO0qykkY7V7VXEYyzAeKpfvHBsfhXN+vcOmdN0Hq/h8GtqS3YizVH3u3bwHQLCWwiylWuZ1dHou71uXqNrClqt+/wBbBCEJXLAQhCAEodYNZaGD2Uc3qMLhRc7I9p7ZDd295ErT2IxFOgzYWl46pkBdQFvm5BI2rchnONaRFYVGOIDCoxu3jAysTzsQPlulu1t1VeZPTu5/8Kd3cuksRWvfyX7Nnj8Y+LUtTrLtHiN9h7IAPkfWZTF6OrU97KSPaXyh28u2QFYg3BIPMbj3ydh9OV0zO2Pfz7xvmrGDgsRxgy5VFN5luQ9qG1LVtI4Wt/xafi29pf6jf3iNVNFBhtUKi1ByJF+8f5Rx955w92pX7UNqJXoum51K9eXflGtqegf2om1GdqJtTw9FxKbQuMx85ALSftSJi6dvKHbPEw0Mkzr3gmxG3gSv7uqy9jBX/WZxwtOl+BjEf81S/hOO3bVvyrK94s0umCzZvFX6P8/0dPhCEyDXCJFiQBYQhAEMWIYsAIQhACUGmtPCi60qdmqEjavcqgPO2ZPLt5Xv5y5x+0Nf961+vbMt2lCNVy4uSyVLuvKko8PN4LjCeEvAmo1Gs3inRihvdRcGxN2sLbuBM1mC0nQrAGlUV75WO89h3z5q1no3xWI5+NqfmMq8LiqtI3pO9M+4zL3gZw7eL2PFXktz62hPnXQ/hJ0lh7DxgrKOFUDLkCMu6bXRPhkotYYrDvT5tSIYfhNjOUrea21O0a8H8jqsYxWGp1VKVEWopzV1DDuMpdE656OxRC0sVT2jkjnYfqCva/ZeaGcmmtzqmnsZPSWoeDq3NPaoN/0zdb/A17DoFplNJ+D/ABlO5pFMQPdOw/4WNv706vCd4XVWPPPXU4TtKU+WOmn68j58x2Eq0W2a1N6R5VFK36r59kihyDcEg8wbGfRFeglRSjqrqc1YAg9YMy+lNQcDWuVRqDc6Rsv4DdQOoCW4X8X8S8NSnOwkvhfjp68DlVLTVZdzEVBycff+t57/ANrw1T0lNE813r/rsmi0r4NMXTuaDpiBy/4b9xup/EOqY7Sejq+GOzXpPROQ8YpAPwtk3YZZhUpz+B+um5WlTqQ+JeuuxObCEi9NlqD3SL90isSNx3dcrQ5BuCQeYJBkhdKVMntUHvDf3yWpHQlbUQtGRi6Tc6Z6d69+c924ghhzU3njZIh4hNk9HCbLwQYnZxzJfc9FxbmysjD5bUytQBhYyw8H2INLSeFvuu7If50ZR8yJzrdqnJfI6UXw1Iv5n0FCEJjGyESLEgCwhCAIYsQxYAQhCAE5liFtiKn8Z/8AEM6bOb45bYir/GqfnM0PZ+8uhn+0F2Y9Tlmsw/bMR/Fb6ynr0uI7Ze61D9sxHx/UAyrk1sc3uV4E9CPVqVt4yngCTIsS0udD6zY7B2GHxNRFHqE7dPspvdR2CVAigT1pPc8UmtUdP0P4Ya62XF4dao4vQJRuvYa4Y9qzb6I8IejMTYCuKDH1cSPFnq2j5B7Gnz2BFAnKVrCW2h1jdTW+p9Wo4YAqQQciDcHqM9z5h0TpbE4U3w9apR4kIxCk9Keie0Ts/g80rpTFJ43FqniSPIcoUq1D7QUeTsdNhfheVqts6aznQtUrmNR4wzbzxUpqwKsAwOYYAg9YM9wlYsGT0r4PtHYi58UaDH1qB2B+DenymK0t4KsUlzhqqVx7L3pv0AZqeu4nYYTtC4qR2fjqcZ29OW6/o+ZtLaGxWFNsRQqUeF3U7JPQ48k9hlcHI3gkdINp9TsgIIIBBzB3gzL6Z8H2jcTcmj4hj6+HPiz17PoE9amWYXq/kvArSsv9X4nBkx7+tZuvce8SfofFXxOGdFYutWkwUAktsup2RbPKbLS/ghrrvwuISqPZrAowHxLcN3CbbUrUmho5Q589iCLNVI9G+a0x6q9OZ48AJ1Lmnw6anOFtPi10NbCEJmmmESLEgCwhCAIYsSLACEIQAnPdIr5+r/Ff85nQpgtJr5+r/Eb6y9YPtvoUb9ZgupyfW0fttf4l/IsqxLbXIfttbrT/AA1lOJ3jscHue7XkWpTsZKEVlBFjJkCGBPQEVlsbQAkiGQAj1GkWIVQWYkABQSSTkABvJnlVmm1D03TwGLStVQMhBRjsgtTDW84nG442zBPRPZZSbSyxHDaTeEbfUfwbhNnEY9QzbilA2Kr01eDH3chxvw6fG6VRWUMpDKwBBUggg7wQeIjkx51JVHmRsQpxprEQhCEgTCEIQAhCEAIzXrLTUu7BVUEszGwAGZJi1qqopdyFVRck7gAOJnLtbdY2xbbCXWip3DIsRk7/AGHDM78u9ChKtLC25s4V68aMcvfkhdYNdcRVqg4VzRpoTs7htP7zhgd3Je/flI0d4Ra6bq9JKg9pbo3aN4J7pjnEbJmt/i0XFR4fz4mOrutxOXF+PA7loXSaYugmIphlV9qwewIKsUN7E8VMnyg1FpbOAw6niGb8dRnH5pfzEmkpNLbLNym24pvfCFhCEiTEMWIYsAIQhACYnSq+fq/GfoJtpjtKL5+r8X6VluyeJvoU71Zgupx7XUfttXqp/wCGspRL3Xn/AJ1/hT8tvtKES4loVHuOCexGxHBJkGxXS4jAWS0E9NSvvkkRZHVY6qwVY+qyZBm21A10ODthsSS1AnyW3k0ifqnRwnYKVRXUMpDKQCCpBBByIIzE+bVWafVTWyvgDsDztEm5pMcr5lD6p6Mj23lO4tOJ8UN/v68y3b3fB2Z7fb15HcISp0HrBhsau1Re5A8pG3VF+JeXSLjpltM1pp4ZppprKCEITw9CNV6y01LuQqqLknICGIrrTUu5CqouScgJzrWTTjYptlbrSU+SvFj7TfYcOuWLe3lWlhbc2V7i4jRjl78kMa0affFtsrdaKnyVyLEes/2HDryzriSnErMViBkJuwhGnFRitDBnUlUk5S3G6ziRHZmIVRdmIVRzJNgO8zzWrTQeDTRRxWNWoRenh7VG5bf9kOu4LfyTlVqqEXJ8jrSpOclHvOx6Owoo0qVEZU0VB/KoH2kmLEnz59CLCEIAQhCAEIQgBMppNfP1fiH5Fmrma0mvnqnWv5Flm1eJ/QrXSzD6nF9fR+2H+Gn6pnhNF4QR+2f9tfzPKPA4SpWdaVFGqO2SoCSee4cJoR2M+SyzyI6gl1ozBJSIZ1WofWDi46RY/WedM6KFIirS8qi/onip4o32nRxaOSknsViiPoI2gj6CenghpcRBVkhRPfi7ySIsbVY4qxVSOKsmQPeHdkYOjFGU3DKSGB6CN4mz0Pr7iadlrqK68/QfvAs3cOuZBFjyLIzowqLEkShWnTeYs6xgNcsFV3bZpHlVFv7wuvzlzRxtJ1LJUR1AvdGVhbsnFEWP0qAYgW3kgd8qy9mwfwya8y3H2lJfFFPo8fk1Osmlqld9kq1Omp8lWBBb3m5nkOEpHE3JUNuIBHIi4mX12wtOjQD0xsFnCmxNrFWOXDLhO9CtCKUFHBXr0Zybm5ZMtj8YN6r2n+kp61aJWrSNRpVK1RaVJTUdzsqq5k/bnc7gBedJT7znCHJDmEw1XEVUoUVNSo5sqj5kngBmTwneNUNX0wGHWiDtOTtVX9pznboFgB0DrkLUfVGno6ldrPiHA8Y/AcfF0+Sg8eJ3ngBqpj3Nf3jwtvubNtb+7WXv9ghCEqloIQhACEIQAhCEAJn9IL56p1r+RZoJT4nDs9Zgu70SWOQFgO07sp1oyUZZZxrRco4RybWHVzE4/SIpYddwprtu1wlMeMqb2PPkBvPfOn6papYbR1PZpDbqMPOVWA236B7K+6O253y7wuGSkuygsL3PMk5kniY/JVa8prHIUqKhrzOd6+6rG7YzDr01UHzqKPqO3nMVhMSFBRxt033Mv3HTO8zmuuuqBTaxOFXyN5qU19Tmyj2eY4cN2Vq1uVj3dT6evsynd2zT95T+v5/KMBpPRRo2dDt0m9F+XutyMjIJe4HE7IKkB0b0lOR/zjWN0RuNShd04r66f1EvtNblBNS29dPkVqCPIJ4QR1BJYINnoJeOLSiosfRZJEWxtUjyLHUWSEWTIsaRJZaIwxaqnIG5/l3/AGjCLNBoTC7ILnM7h1SNSXDFkqUOKSLpJlPCZX2aFFeJqE9iqR+oTVJOa+EvGmri6eHpguUUDZXeTUqkHZAHGwTvmfBdpGhN9kyqK9V1p01Lu5Cqqi5YnICdr1B1NTR9PxlSz4lx5bZhAd/i0PLmeJHICRvB/qemBXx9YB8S43nMUlPqKefNuwbs9qKsq3Nxx9mO33Ldtb8Halv9h2E8B4oaVC2eoQhACEIQAhCEAIQhACEIQAhCeHgAzxpqs8VGkWq8AyWs2qakmthQAc2pCwBPE0+R93I8Lccrh3ZTxUjceBB4gj7TplWtKLTGBp1vK9F/aHH4hxHzmhbXrh2amq+35Xn1M+5sVPtU9H3cn+H5f3mK+Dp1t582/tKNx+JZX19HVKe8jaHtLvH+XbLh6DUzZh1EZHt+xjlJiMt01I8MlxQenkZUuKL4ZrXz/fUz6CPosu2oo3pID0jce8RRo6n7w7R9xPeLG55jOxVIsfRZaU9HU/ePWR9hJuHoIvogD698Ookeqm2RcBo69mfu/rLxIwkeU23nd1yrUk5PUtU4qK0DHY1KFJ6r5KL2GbHJVUcWJIAHMyj1S0J4uo+OxVmxNUlrZiiG9VfetuJ4DcOJLuLxy1HU5qhuvS2W1bvt1nsdp4q8za1bPZjsaVGjjtS3NKuKjq4mZ6nXMmUapMrFku0rR9Kkq6JMm0gYBMV46pjFNY+ogHqEIQAhCEAIQhACEIQAiERYQBp6V5Fq4YydCAUWIwhlXicI3KbAjonhqCnhAOf4qg2Vu+VVWkyZDsbL/KdPfR9M5iR30LRPCTp1JU3mLwQqU41FiSyc2TGgemCvZcfLf8pLo4lGyZT2i/dNtU1ZoHhIz6n4Y5iXI38/5JPyKcvZ8P4trzM6keDAZkDrlz/uXhuUUal4Xit+ueu+X+vn+jxWLX8vL9mcxGmqFP1w59mn5R7xuEqcXpWrX3BSieyOPxHjOgU9U8KuS/SSqegMOuSytUuJT02RZp28Ya7s5vhsPUPAy1w2Ac8DN2mjaQyUSQuHQZKJwO5ksPoxzwlph9GGXgUcp6gEGlgrSSlECOwgCARYQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIB/9k="
                alt=""
              />
            </span>
            <span width="auto" height="30px" color="black" style={{ verticalAlign: 'top', marginLeft: '5px' }}>
              {randomColor}
            </span>
          </div>
          <div style={{ position: 'absolute', right: 0 }}>
            <Button width="auto" height="30px" color="black" onClick={() => setLabelOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              width="auto"
              height="30px"
              color="white"
              backgroundColor="green"
              style={labelName === 'Label Priveiw' ? { pointerEvents: 'none', opacity: '0.3' } : {}}
            >
              Create label
            </Button>
          </div>
        </AddLabelArea>
      </div>
    </>
  );
};

export default CreateLabelView;

const AddLabelArea = styled.form`
  margin: 20px 0;
  border: 1px blue dashed;
  display: flex;
  position: relative;
`;
