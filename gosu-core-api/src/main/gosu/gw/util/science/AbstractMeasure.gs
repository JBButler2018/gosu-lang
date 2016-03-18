package gw.util.science

uses java.lang.Class
uses java.math.BigDecimal

abstract class AbstractMeasure<U extends IUnit<BigDecimal, IDimension, U>, T extends AbstractMeasure<U, T>> implements IDimension<T, BigDecimal> {
  final var _value: BigDecimal
  final var _dipslayUnit: U as Unit
  final var _baseUnit: U as BaseUnit

  /**
   * @param value Quantity in specified units
   * @param unit Unit qualifying the specified value
   * @param baseUnit Base unit for this AbstractMeasure
   */
  construct( value : BigDecimal, unit: U, displayUnit: U, baseUnit: U ) {
    _value = unit.toBaseUnits( value )
    _dipslayUnit = displayUnit
    _baseUnit = baseUnit
  }

  function copy( unit: U ) : T {
    return new T( toNumber(), BaseUnit, unit ) 
  }

  override function fromNumber( p0: BigDecimal ) : T {
    return new T( p0, BaseUnit, Unit )
  }
  
  override function numberType() : java.lang.Class<BigDecimal> {
    return BigDecimal
  }

  /**
   * Always stored in Base units
   */
  override function toNumber() : BigDecimal {
    return _value
  }

  function to( unit: U ) : T {
    return copy( unit )
  }
  
  function toNumber( unit: U ) : BigDecimal {
    return unit.from( this )
  }
  
  override function toString() : String {
    return toNumber( Unit ).stripTrailingZeros().toPlainString() + " " + Unit.UnitSymbol
  }
  
  override function hashCode() : int {
    return _value.intValue()
  }
  
  override function compareTo( o: T ) : int {
    var n = o.toNumber()
    return _value > n ? 1 : _value < n ? -1 : 0
  }
}
